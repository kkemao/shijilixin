// eslint-disable-next-line no-use-before-define
import React from "react";

interface Props {
  id: number;
  value: string;
}

function Test({ id, value }: Props) {
  return (
    <div>
      {id}:{value}
    </div>
  );
}

export default Test;
