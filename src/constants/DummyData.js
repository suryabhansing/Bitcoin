import Colors from './Colors';
import Images from './Images';

export const arrayData = [
  {image: Images.SEND, text: 'Send', id: 1},
  {image: Images.RECEIVE, text: 'Receive', id: 2},
  {image: Images.BUY, text: 'Buy', id: 3},
  {image: Images.SWAP, text: 'Swap', id: 4},
];

export const NotificationData = [
  {
    image: Images.CROSS,
    title: 'ETH Received',
    text: '0.08 ETH Received',
    id: 1,
    time: '2 Day ago',
  },
  {
    image: Images.PAYMENT,
    title: 'Payment',
    text: 'Thank you! Your transaction is com...',
    id: 2,
    // time: '2 Day ago',
  },
  {
    image: Images.PROMOTION,
    title: 'Promotion',
    text: 'Invite friends - Get 1 coupons each!',
    id: 3,
    // time: '2 Day ago',
  },
  {
    image: Images.RIGHT,
    title: 'New coin',
    text: 'New bid 0.2 ETH',
    id: 4,
    time: '5 Day ago',
  },
  {
    image: Images.PAYMENT2,
    title: 'Payment',
    text: 'Thank you! Your transaction is com...',
    id: 5,
    // time: '5 Day ago',
  },
];

export const earningData = [
  {
    balance: 70892223.98,
    profit_loss: 8,
    profit_loss_value: 100.99,
    is_profit: true,
    type: 'Daily',
    unit: 'USD',
    gradientColor: Colors.aquaGradient,
  },
  {
    balance: 7073673.98,
    profit_loss: 11,
    profit_loss_value: 5500.88,
    is_profit: true,
    type: 'Weekly',
    unit: 'USD',
    gradientColor: Colors.pinkGradeient,
  },
  {
    balance: 7073673.98,
    profit_loss: 19,
    profit_loss_value: 400,
    is_profit: true,
    type: 'Monthy',
    unit: 'USD',
    gradientColor: Colors.yellowGradient,
  },

  {
    balance: 798893.98,
    profit_loss: 10,
    profit_loss_value: 100,

    is_profit: true,
    type: 'Yearly',
    unit: 'USD',
    gradientColor: Colors.purpleGradient,
  },
];
export const marketData = [
  {
    id: '1',
    name: 'Achain',
    shortname: 'ACH',
    qty: 23,
    currentprice: 15812.23,
    incre_decre: 3.84,
    isProfit: false,
    profit_loss_amount: 250.0,
    image: Images.ACHAIN,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '2',
    name: 'Ethereum',
    shortname: 'ETH',
    qty: 3,
    currentprice: 1264.8,
    incre_decre: 3.84,
    isProfit: true,
    profit_loss_amount: 190.9,
    image: Images.ETHERIUM,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '3',
    name: 'Ripple',
    qty: 2500,
    shortname: 'XRP',
    currentprice: 1264.99,
    incre_decre: 4.83,
    isProfit: false,
    profit_loss_amount: 230.44,
    image: Images.RIPPLE,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '4',
    name: 'Binance coin',
    qty: 10,
    shortname: 'BCN',
    currentprice: 1264.99,
    incre_decre: 4.83,
    isProfit: true,
    profit_loss_amount: 250.44,
    image: Images.BINANCE_COIN,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '5',
    name: 'Pound',
    qty: 6,
    shortname: 'GBP',
    currentprice: 1264.99,
    incre_decre: 4.83,
    isProfit: false,
    profit_loss_amount: 250.44,
    image: Images.POUND,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '6',
    name: 'Tether',
    qty: 8,
    shortname: 'USDT',
    currentprice: 1264.99,
    incre_decre: 4.83,
    isProfit: true,
    profit_loss_amount: 258.44,
    image: Images.TETHER,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '7',
    name: 'Tron',
    qty: 8,
    shortname: 'TRX',
    currentprice: 1264.99,
    incre_decre: 4.83,
    isProfit: false,
    profit_loss_amount: 300,
    image: Images.TRON,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
  {
    id: '8',
    name: 'Bitcoin',
    qty: 0.0000007,
    shortname: 'BTC',
    currentprice: 1264.99,
    incre_decre: 4.83,
    isProfit: false,
    profit_loss_amount: 300,
    image: Images.BITCOIN_CASH,
    coindDetail: {
      market_cap: 20351.0,
      volume: 98669.59,
      available_supply: 15897.198,
      total_supply: 276412.348,
      low: 54987.12,
      high: 14147.96,
    },
  },
];
