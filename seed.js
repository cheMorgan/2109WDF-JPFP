const { green, red } = require("chalk");
const { db, Project, Robot } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    //  ROBOTS
    const rodney = await Robot.create({
      name: "Rodney Copperbottom",
      imageUrl:
        "https://static.wikia.nocookie.net/parody/images/8/89/Profile_-_Rodney_Copperbottom.png/revision/latest/scale-to-width-down/178?cb=20210131010513",
    });
    const piper = await Robot.create({
      name: "Piper Pinwheeler",
      imageUrl:
        "https://static.wikia.nocookie.net/robotcity/images/b/b2/Piper.jpg/revision/latest/top-crop/width/360/height/450?cb=20111228074058",
    });
    const bigweld = await Robot.create({
      name: "Bigweld",
      fuelType: "diesel",
      imageUrl: "https://pbs.twimg.com/media/ESXEfBtX0AA46c0.jpg",
    });
    // PROJECTS
    const wonderbot = await Project.create({
      title: "wonderbot",
      deadline: new Date(2021, 10, 21),
      priority: 10,
      description:
        "It has four kitchen spoons atop its head, which it uses like the blades on a helicopter to fly. Its head is protected by a large cup, with its two eyes peeking out from underneath. It has a small, fragile neck, with a tiny body protected by a small bowl. It also possess three long, wiry limbs which can be used as hands or to create pictures for visual communication.",
    });
    const upgrades = await Project.create({
      title: "upgrades",
      deadline: new Date(2021, 10, 21),
      priority: 7,
      description: "ehhh make em look better",
    });
    //END OF SEED DATA
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
// All descriptions from Robotcity.fandom.com
