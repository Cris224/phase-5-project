
User.create(name: "mojojojo", username: "mojo")

Game.create(name: "GoW", release_date:"2018", description: "test", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7")
Game.create(name: "cod", release_date:"2019", description: "test", image: "https://storage.qoo-app.com/game/12728/Edepu9gNdkLWAdRuxZi9OUwsUfdek8tV.jpg")
Game.create(name: "dbd", release_date:"old", description: "test", image: "https://storage.qoo-app.com/game/12728/Edepu9gNdkLWAdRuxZi9OUwsUfdek8tV.jpg")

Review.create(rating: 100, comment: "GOAT", user_id: User.first.id, game_id: Game.first.id)


