
User.create(name: "mojojojo", username: "mojo")
User.create(name: "jo", username: "mom")

Game.create(name: "God of War (2018)", release_date:"Apr 20, 2018", description: "God of War is an action-adventure game developed by the Santa Monica division of Sony Computer Entertainment. It is the first in the series to be released on PlayStation 4 with a release on April 20, 2018. The game serves as a soft reboot and takes place in Norse mythology as apposed to the Greek mythology of the previous games.", image: "https://www.giantbomb.com/a/uploads/scale_small/33/338034/3287019-3786480319-Z7hV9.png")
Game.create(name: "cod", release_date:"2019", description: "test", image: "https://storage.qoo-app.com/game/12728/Edepu9gNdkLWAdRuxZi9OUwsUfdek8tV.jpg")
Game.create(name: "dbd", release_date:"old", description: "test", image: "https://storage.qoo-app.com/game/12728/Edepu9gNdkLWAdRuxZi9OUwsUfdek8tV.jpg")

Review.create(rating: 100, comment: "GOAT", user_id: User.first.id, game_id: Game.first.id)
Review.create(rating: 68, comment: "GOT", user_id: User.last.id, game_id: Game.first.id)


