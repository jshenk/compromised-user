export const userData = [
  {
    name: "Timmy Turner",
    email: "userGood@example.com",
    password: "pw",
    meta: {
      isPasswordCompromised: false,
    },
  },
  {
    name: "Trixy Tang",
    email: "userBad@example.com",
    password: "pw",
    meta: {
      isPasswordCompromised: true,
      compromisedAccounts: [
        { date: "2012-12-5", name: "James Doe" },
        { date: "2011-7-5", name: "Jane Doe" },
        { date: "2012-10-5", name: "Don Doe" },
      ],
    },
  },
];
