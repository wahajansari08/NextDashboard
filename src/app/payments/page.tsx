import { Payment } from "./columns" 

const getData = async(): Promise<Payment> => {
    return[
  {
    "id": 1,
    "amount": 150.75,
    "status": "completed",
    "username": "johndoe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "amount": 89.50,
    "status": "pending",
    "username": "janedoe",
    "email": "janedoe@example.com"
  },
  {
    "id": 3,
    "amount": 300.00,
    "status": "failed",
    "username": "mikebrown",
    "email": "mikebrown@example.com"
  },
  {
    "id": 4,
    "amount": 45.25,
    "status": "completed",
    "username": "emilywhite",
    "email": "emilywhite@example.com"
  },
  {
    "id": 5,
    "amount": 120.00,
    "status": "pending",
    "username": "sarahgreen",
    "email": "sarahgreen@example.com"
  },
  {
    "id": 6,
    "amount": 210.80,
    "status": "completed",
    "username": "davidblack",
    "email": "davidblack@example.com"
  },
  {
    "id": 7,
    "amount": 0.00,
    "status": "failed",
    "username": "lucasgray",
    "email": "lucasgray@example.com"
  },
  {
    "id": 8,
    "amount": 78.90,
    "status": "completed",
    "username": "oliviabrown",
    "email": "oliviabrown@example.com"
  },
  {
    "id": 9,
    "amount": 55.60,
    "status": "pending",
    "username": "noahsmith",
    "email": "noahsmith@example.com"
  },
  {
    "id": 10,
    "amount": 199.99,
    "status": "completed",
    "username": "avajones",
    "email": "avajones@example.com"
  }
]
}



const PaymentsPage = async ()=>{
    const data = await getData()
return(
    <div className="">
      <div className="mb-8 px-4 bg-secondary rounded-md">
        <h1 className="semi-bold">All Payments</h1>
      </div>
    </div>
)
}
export default PaymentsPage