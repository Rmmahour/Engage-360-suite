declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    className?: string;
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    fade?: boolean;
    cssEase?: string;
    responsive?: {
      breakpoint: number;
      settings: Settings;
    }[];
    [key: string]: any;
  }

  export default class Slider extends React.Component<Settings> {}
}
