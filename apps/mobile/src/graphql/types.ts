export interface Request {
  id: string
  title: string
  price: number
  category: string
  images: string[]
}

export const requests: Request[] = [
  {
    id: '1',
    title: 'Lawn by garden',
    price: 100,
    category: 'Transportation',
    images: [
      'https://picsum.photos/200?random=1',
      'https://picsum.photos/300?random=1',
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/500?random=1'
    ]
  },
  {
    id: '2',
    title: 'Shopping in the Countdown tonight',
    price: 50,
    category: 'Carry',
    images: [
      'https://picsum.photos/200?random=2',
      'https://picsum.photos/300?random=2',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/500?random=2'
    ]
  },
  {
    id: '3',
    title: 'Take out rubish',
    price: 20,
    category: 'Maintenance',
    images: [
      'https://picsum.photos/200?random=3',
      'https://picsum.photos/300?random=3',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/500?random=3'
    ]
  },
  {
    id: '4',
    title: 'Transfer fridge',
    price: 10,
    category: 'Transportation',
    images: [
      'https://picsum.photos/200?random=4',
      'https://picsum.photos/300?random=4',
      'https://picsum.photos/400?random=4',
      'https://picsum.photos/500?random=4'
    ]
  }
]
