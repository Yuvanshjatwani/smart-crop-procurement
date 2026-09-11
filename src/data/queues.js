export const queueData = [
  {
    id: "A",
    name: "Queue A",
    current: "Suresh Pal",
    position: 1,
    waiting: 4,
    farmers: [
      { id: "SCPS-042", name: "Suresh Pal", quantity: "35 q", produce: "Wheat", status: "Serving" },
      { id: "SCPS-043", name: "Meena Devi", quantity: "28 q", produce: "Wheat", status: "Waiting" },
      { id: "SCPS-044", name: "Ravi Singh", quantity: "40 q", produce: "Rice", status: "Waiting" },
    ],
  },
  {
    id: "B",
    name: "Queue B",
    current: "Anil Sharma",
    position: 3,
    waiting: 6,
    farmers: [
      { id: "SCPS-051", name: "Anil Sharma", quantity: "50 q", produce: "Wheat", status: "Serving" },
      { id: "SCPS-052", name: "Rajesh Kumar", quantity: "42 q", produce: "Wheat", status: "Waiting" },
      { id: "SCPS-053", name: "Mohan Lal", quantity: "31 q", produce: "Rice", status: "Waiting" },
    ],
  },
  {
    id: "C",
    name: "Queue C",
    current: "Priya Devi",
    position: 2,
    waiting: 3,
    farmers: [
      { id: "SCPS-061", name: "Priya Devi", quantity: "25 q", produce: "Mustard", status: "Serving" },
      { id: "SCPS-062", name: "Vikas Kumar", quantity: "45 q", produce: "Wheat", status: "Waiting" },
    ],
  },
];