const dataIn = [
  {
    userId: 124,
    contactList: [
      {
        id: 1,
        name: "pop",
        email: "pop@gmail.com",
        phone: 12345,
        company: "popGroup",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "hi" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hell1" },
          { status: "to", id: 1, message: "Hell2" },
          { status: "from", id: 1, message: "Hell3" }
        ]
      },
      {
        id: 2,
        name: "pop1",
        email: "pop1@gmail.com",
        phone: 123456,
        company: "pop1Group",
        address: "3949324, Hyd",
        chat: [
          { status: "to", id: 1, message: "okay" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 3,
        name: "pop2",
        email: "pop2@gmail.com",
        phone: 1234567,
        company: "pop1Group",
        address: "394932342, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 4,
        name: "pop3",
        email: "pop3@gmail.com",
        phone: 12345678,
        company: "pop3Groupn",
        address: "39493, Hyde",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 5,
        name: "pop4",
        email: "pop4@gmail.com",
        phone: 123456789,
        company: "pop4GroupI",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      }
    ]
  },
  {
    userId: 125,
    contactList: [
      {
        id: 1,
        name: "bob",
        email: "bob@gmail.com",
        phone: 2098345,
        company: "bobGroup",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 2,
        name: "bob1",
        email: "bob1@gmail.com",
        phone: 2098345,
        company: "bob1Group",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 3,
        name: "bob2",
        email: "bob2@gmail.com",
        phone: 2098345,
        company: "bob2Group",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 4,
        name: "bob3",
        email: "bob3@gmail.com",
        phone: 2098345,
        company: "bob3Groupn",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 5,
        name: "bob4",
        email: "bob4@gmail.com",
        phone: 2098345324,
        company: "bob4GroupI",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      }
    ]
  },
  {
    userId: 126,
    contactList: [
      {
        id: 1,
        name: "jhon",
        email: "jhon@gmail.com",
        phone: 2098345,
        company: "jhonGroup",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 2,
        name: "jhon1",
        email: "jhon1@gmail.com",
        phone: 2098345,
        company: "jhon1Group",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 3,
        name: "jhon2",
        email: "jhon2@gmail.com",
        phone: 2098345,
        company: "jhon2Group",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 4,
        name: "jhon3",
        email: "jhon3@gmail.com",
        phone: 2098345,
        company: "jhon3Groupn",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 5,
        name: "jhon4",
        email: "jhon4@gmail.com",
        phone: 2098345324,
        company: "jhon4GroupI",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      }
    ]
  },
  {
    userId: 127,
    contactList: [
      {
        id: 1,
        name: "cran",
        email: "cran@gmail.com",
        phone: 2098345,
        company: "cranGroup",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 2,
        name: "cran1",
        email: "cran1@gmail.com",
        phone: 2098345,
        company: "cran1Group",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 3,
        name: "cran2",
        email: "cran2@gmail.com",
        phone: 2098345,
        company: "cran2Group",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 4,
        name: "cran3",
        email: "cran3@gmail.com",
        phone: 2098345,
        company: "cran3Groupn",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      },
      {
        id: 5,
        name: "cran4",
        email: "cran4@gmail.com",
        phone: 2098345324,
        company: "cran4GroupI",
        address: "39493, Hyd",
        chat: [
          { status: "to", id: 1, message: "Hella" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" },
          { status: "to", id: 1, message: "Hello" },
          { status: "from", id: 1, message: "Hello" }
        ]
      }
    ]
  }
];

export { dataIn };
