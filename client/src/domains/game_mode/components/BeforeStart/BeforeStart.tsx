import React, { FC } from "react";
import { Button } from "rebass";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BeforeStart: FC<Props> = ({ onClick }) => (
  <div>
    スタートしてないよ
    <Button onClick={onClick}>スタート</Button>
  </div>
);

export default BeforeStart;
