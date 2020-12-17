export interface IMedia {
  url: string;
  width: number;
  height: number;
}

export interface IPrice {
  value: number;
  currencyCode: string;
  unit: string;
}

export interface IDestination {
  id: string;
  title: string;
  body: string;
  price: IPrice;
  media: {
    large: IMedia;
    small: IMedia;
  };
}
