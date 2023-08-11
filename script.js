const seats = document.querySelectorAll(".seat");
const seatTypes = document.querySelectorAll(".seat-type");
const selectedSeatsContainer = document.getElementById("selectedSeats");
const totalPriceContainer = document.getElementById("totalPrice");
const btn = document.getElementById("continue");
const totalSeats = document.getElementById("totalSeats");
const price = document.getElementsByClassName("price");

let selectedSeats = [];
let total = 0;

const bookSeats = () => {
  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      const list = Array.from(seat.classList);
      console.log(list);

      const seatType = seat.textContent[0];
      const seatNumber = seat.textContent;
      let seatPrice = 0;

      if (seatType === "L") seatPrice = 2999;
      else seatPrice = 2999;

      if (selectedSeats.includes(seatNumber)) {
        seat.classList.toggle("selected");
        selectedSeats = selectedSeats.filter((s) => s !== seatNumber);
        total -= seatPrice;
      } else {
        if (list.includes("available")) {
          seat.classList.toggle("selected");
          selectedSeats.push(seatNumber);
          total += seatPrice;
        } else if (list.includes("available-female")) {
          alert("only available for female passengers");
          let res = prompt("Are you sure you want to book? ['Yes' or 'No']");

          if (res === "yes" || res === "Yes") {
            seat.classList.toggle("selected");
            selectedSeats.push(seatNumber);
            total += seatPrice;
          } else if (res === "no" || res === "No") {
            return;
          } else return;
        } else if (list.includes("others")) {
          alert("Booked by others");
        } else if (list.includes("female")) {
          alert("Booked by female passenger");
        } else {
          alert("Already booked or not available");
        }
      }

      totalSeats.textContent = `${selectedSeats.length}  seat |`;
      selectedSeatsContainer.textContent = `| ${selectedSeats.join(", ")}`;
      totalPriceContainer.textContent = `Total Price: ₹${total}`;
    });
  });
};

bookSeats();
