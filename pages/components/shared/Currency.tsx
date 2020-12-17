export default function currency(price) {
  let char = '$';
  switch (price.currencyCode) {
    case 'GBP':
      char = '£';
  }

  return <span>{`${char}${price.value} ${price.unit}`}</span>;
}
