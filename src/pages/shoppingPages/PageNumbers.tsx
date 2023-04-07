import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

const PageNumbers = ({ page, urlParams, productLength }:
  { page: any, urlParams: URLSearchParams, productLength: number }
) => {
  const [pageNumbers, setPageNumbers] = React.useState(Number(page));
  const navigate = useNavigate();

  const [pages, setPages] = useState<any[]>([]);


  const handleAlignment = (
    event: React.MouseEvent<HTMLElement> | null,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setPageNumbers(Number(newAlignment));
    }
  };

  useEffect(() => {
    setPageNumbers(page);

    const allPages = Math.ceil(productLength / 8) || 1;
    const pageList = [1, allPages, page];
    
    if (allPages > 7) {
      if (page - 1 > 1) {
        if (page - 2 > 1) pageList.push(page - 2);
        else pageList.push(page + 3);
        pageList.push(page - 1);
      } else pageList.push(1 + 3, 1 + 4, 1 + 5);


      if (page + 1 < allPages) {
        if (page + 2 < allPages) pageList.push(page + 2);
        else pageList.push(page - 3);
        pageList.push(page + 1);
      } else pageList.push(allPages - 3, allPages - 4, allPages - 5);
    }else {pageList.push(...Array.from({length: allPages}, (_, i) => i + 1))}

    const uniquePageList = pageList.filter(function (item: any, pos, self) {
      return self.indexOf(item) == pos;
    }).sort();
    
    setPages(uniquePageList.sort(function (a, b) { return a - b }));

  }, [page, productLength])

  const pageDefinition = (p: any) => {
    if(p != page) {
      window.scrollTo(0,0);
      let params = urlParams
      params.set("p", p);
  
      const options = {
        search: `?${params}`,
      };
      navigate(options, { replace: true });
    }
    
  }

  return (
    <div className='PageNumbers'>
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup
          value={pageNumbers}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment">

          {
            pages.map(p => {
              return (

                [p != 1 && !pages.includes(p - 1) && <ToggleButton value={p - 1} disabled aria-label="page1">...</ToggleButton>,
                <ToggleButton onClick={() => pageDefinition(p)} value={p} aria-label="page1">{p}</ToggleButton>]
              )
            }
            )
          }


        </ToggleButtonGroup>


      </Stack>
    </div>
  )
}

export default PageNumbers