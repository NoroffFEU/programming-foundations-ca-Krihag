const allApps = document.querySelectorAll(".phone-apps-powered");

const phone = {
  brand: "iphone",
  model: 14,
  color: "black",
  battery: 20,
  powered: true,
  apps: ["Camera", "Outlook", "Messenger", "Github", "Safari"],

  // Charge battery function
  chargeBattery: function () {
    console.log("Charging battery...");
    this.battery += 20;
    console.log(`Battery is now at ${this.battery}%`);
  },

  // Make call function
  makeCall: function (person) {
    if (this.powered) {
      console.log(`Calling ${person}`);
      this.battery -= 10;
      this.checkBattery();
    } else {
      console.log(`Your phone is off, you need to turn it back on to use it`);
    }
  },

  //Check battery function
  checkBattery: function () {
    console.log(`The battery is at: ${this.battery}%`);
    if (this.battery <= 0) {
      this.powered = false;
      console.log("Your phone has no battery left. It is now off.");
    } else console.log(`Your phone has ${this.battery}% battery left`);
  },

  //Turn on phone function
  powerPhoneOn: function () {
    if (this.powered === false) {
      if (this.battery >= 20) {
        console.log("Phone is now powered back on..");
        this.powered = true;
      } else {
        console.log(
          `Your battery is only ${this.battery}. You need atleast 20% to power phone back on.`
        );
      }
    } else console.log("Your phone is allready on");
  },
};

//Adding event listeners to all apps
allApps.forEach((app) =>
  app.addEventListener("click", function (e) {
    this.classList.add("using-app");

    allApps.forEach((app) => {
      if (app != this) app.style.display = "none";
    });

    setTimeout(() => {
      console.log(this + " this");
      this.classList.remove("using-app");
      allApps.forEach((app) => (app.style.display = "flex"));
    }, 5000);
  })
);
