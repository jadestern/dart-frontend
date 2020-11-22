import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

export interface IProps {}

const Copyright: FC<IProps> = ({}) => {
  return (
    <div className="border-t pt-4">
      <Typography variant="caption">
        아이콘 제작자
        <a
          className="mx-2"
          href="https://www.flaticon.com/kr/authors/freepik"
          title="Freepik"
          target="_blank"
        >
          Freepik
        </a>
        from
        <a
          className="mx-2"
          href="https://www.flaticon.com/kr/"
          title="Flaticon"
          target="_blank"
        >
          www.flaticon.com
        </a>
      </Typography>
    </div>
  );
};

export default Copyright;
