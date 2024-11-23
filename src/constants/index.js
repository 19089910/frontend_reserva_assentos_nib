/**
 * essa informação vai ser desenvolvido no backend
 */

export const show = [
  {
    showName: 'Uma aventura dos brinquedos',
    description: 'Uma peça incrível para toda a família!',
    bannerUrl: 'http://exemplo.com/banner.jpg',
    postUrl: 'http://exemplo.com/post.jpg',
    dates: [
      {
        showDateTime: '2024-10-20T19:30:00Z',
        seats: [
          { seatNumber: 'A1', isAvailable: true },
          { seatNumber: 'A2', isAvailable: true }
        ]
      },
      {
        showDateTime: '2024-10-21T19:30:00Z',
        seats: [
          { seatNumber: 'A1', isAvailable: true },
          { seatNumber: 'A2', isAvailable: false }
        ]
      },
      {
        showDateTime: '2024-10-22T17:00:00Z',
        seats: []
      },
      {
        showDateTime: '2024-10-22T19:00:00Z',
        seats: []
      },
      {
        showDateTime: '2024-10-23T19:30:00Z',
        seats: []
      },
      {
        showDateTime: '2024-10-24T17:00:00Z',
        seats: []
      },
      {
        showDateTime: '2024-10-24T19:00:00Z',
        seats: []
      }
    ]
  }
]
