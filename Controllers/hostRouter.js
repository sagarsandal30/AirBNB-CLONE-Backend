const Home = require("../Models/homes");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("host/edit-home", {
    PageTitle: "Register Home",
    CurrentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId)
    .then(([rows]) => {
      const home = rows[0];

      if (!home) {
        console.log("Home not found");
        return res.redirect("/host/host-home-list");
      }

      console.log(req.url, req.method, home, homeId, editing);

      res.render("host/edit-home", {
        PageTitle: "Edit Home",
        CurrentPage: "host-home",
        editing: editing,
        home: home,
      });
    })
    .catch((error) => {
      console.log("Error finding home", error);
    });
};

exports.postEditHome = (req, res, next) => {
  const { homeName, price, location, rating, homeImage, description } =
    req.body;

  const home = new Home(
    homeName,
    price,
    location,
    rating,
    homeImage,
    description,
    
  );

  home
    .update()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error editing home", error);
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes]) => {
      res.render("host/host-home-list", {
        registeredHomes: registeredHomes,
        PageTitle: "Host Homes List",
        CurrentPage: "host-home",
      });
    })
    .catch((error) => {
      console.log("Error fetching homes", error);
    });
};

exports.postHomeAdded = (req, res, next) => {
  const { homeName, price, location, rating, homeImage, description } =
    req.body;

  const home = new Home(
    homeName,
    price,
    location,
    rating,
    homeImage,
    description,
  );

  home
    .save()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error Adding home", error);
    });
};
