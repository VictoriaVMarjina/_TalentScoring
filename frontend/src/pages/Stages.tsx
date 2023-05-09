import { Fragment } from "react";

import { ReactComponent as Pattern } from "../assets/pattern.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as StageFrame } from "../assets/stage-frame.svg";

import Stage from "../components/Stage";

const Stages = () => {
  return (
    <Fragment>
      <Pattern className="absolute left-0 top-0" />
      <div className="w-[3px] h-[314px] bg-white absolute left-4"></div>
      <div className="w-[2px] h-[407px] bg-white absolute left-[25.5px]"></div>
      <div className="flex justify-between relative pt-[60px] pl-10">
        <div className="space-y-8 text-white">
          <div className="space-y-2">
            <Logo className="w-52 h-7" />
            <p>Süni intelekt sistemi</p>
          </div>

          <p className="max-w-[234px]">
            Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı
            faizlikdə olduğunuzu müəyyən edə biləcəksiniz.
          </p>
        </div>
        <Stage />
      </div>
      <div>
        <StageFrame className="absolute left-[220px] top-[462px]" />
      </div>
    </Fragment>
  );
};

export default Stages;
