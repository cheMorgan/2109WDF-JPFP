/* eslint-disable quotes */
const { green, red } = require("chalk");
const { db, Project, Robot } = require("./server/db");
const seed = async () => {
  try {
    await db.sync({ force: true });
    //  ROBOTS
    const rodney = await Robot.create({
      name: "Rodney Copperbottom",
      imageUrl:
        "https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/40953/1530553596-21011-5791/Rodney_Copperbottom_large.jpg",
    });
    const piper = await Robot.create({
      name: "Piper Pinwheeler",
      imageUrl:
        "https://www.giantbomb.com/a/uploads/square_small/46/462814/3183153-8077979037-latest",
    });
    const bigweld = await Robot.create({
      name: "Bigweld",
      fuelType: "diesel",
      imageUrl: "https://pbs.twimg.com/media/ESXEfBtX0AA46c0.jpg",
    });
    const walle = await Robot.create({
      name: "Wall-e",
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/zhOkikt7GAARV1YDAYwNQQzeopw=/0x0:1200x808/1400x1400/filters:focal(475x111:667x303):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55061013/wall_ecover.0.jpg",
    });
    const eve = await Robot.create({
      name: "Eve",
      imageUrl:
        "https://i.pinimg.com/originals/bf/7a/bf/bf7abf23d76c269220ca9994c69f594f.png",
    });
    // PROJECTS
    const wonderbot = await Project.create({
      title: "Wonderbot",
      deadline: "2021-12-21",
      priority: 10,
      description:
        "It has four kitchen spoons atop its head, which it uses like the blades on a helicopter to fly. Its head is protected by a large cup, with its two eyes peeking out from underneath. It has a small, fragile neck, with a tiny body protected by a small bowl. It also possess three long, wiry limbs which can be used as hands or to create pictures for visual communication.",
    });
    const upgrades = await Project.create({
      title: "Upgrades",
      deadline: "2021-12-21",
      priority: 7,
      description:
        "Vegan chartreuse selvage prism, disrupt edison bulb semiotics ennui vaporware trust fund. Meggings cronut fam plaid bespoke green juice literally swag mumblecore blue bottle ugh palo santo tacos readymade fixie. Cliche pickled wayfarers organic chartreuse, freegan meditation. PBR&B mlkshk blue bottle you probably haven't heard of them. Leggings direct trade squid banjo, sriracha pabst jean shorts chambray kickstarter enamel pin fingerstache.",
    });
    const beeps = await Project.create({
      title: "Beeps",
      deadline: "2021-11-29",
      priority: 9,
      description:
        "Kickstarter iceland tote bag humblebrag typewriter echo park mumblecore kale chips kinfolk VHS vice photo booth. Mumblecore wolf 8-bit subway tile asymmetrical kickstarter marfa taxidermy +1. Single-origin coffee cred sriracha slow-carb. Pok pok wolf poutine glossier PBR&B ugh schlitz. Ugh man braid plaid wolf, iceland biodiesel VHS migas disrupt.",
    });
    const boops = await Project.create({
      title: "Boops",
      deadline: "2021-11-24",
      priority: 7,
      description:
        "Schlitz tumblr coloring book shoreditch enamel pin vinyl venmo four dollar toast stumptown four loko ramps listicle. Banh mi schlitz try-hard sustainable raclette live-edge vaporware PBR&B kickstarter austin. Locavore chia jean shorts, kitsch vinyl scenester godard bushwick. Waistcoat banjo meditation tote bag butcher forage. Raclette brooklyn pitchfork, gastropub meditation tilde semiotics pour-over.",
    });
    //END OF SEED DATA

    await piper.setProjects([wonderbot, beeps]);
    await rodney.setProjects([wonderbot, upgrades, boops]);
    await bigweld.setProjects(upgrades);
    await walle.setProjects([wonderbot, upgrades, boops]);
    await eve.setProjects([upgrades, beeps, boops]);
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
