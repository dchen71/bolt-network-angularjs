app.controller('MainController', ['$scope', function($scope) {
  $scope.programs  = [
  {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
  },

  {
    series: "The Walking Dead",
    series_img: "http://www.gstatic.com/tv/thumb/tvbanners/8282918/p8282918_b_v7_ai.jpg",
    genre: "Action",
    season: 5,
    episode: "No Sanctuary",
    description: "Flashbacks show the Terminus inhabitants being assaulted by marauders and held in a train car before their leader, Gareth, declares their need to become 'the butcher' in order to take back their sanctuary. In the present, Carol and Tyreese learn from a Terminus ally, Martin, that the rest of their group is being held captive in Terminus. Carol heads off to rescue Rick's group, while Tyreese stays behind with Martin and Judith. Carol causes an explosion that sets parts of Terminus ablaze, attracts a nearby herd of walkers, and averts the executions of Rick, Daryl, Glenn, and Bob, who use the opportunity to escape after discovering Terminus' inhabitants are murderous cannibals. They fight their way through the herd of walkers and the Terminus inhabitants, and rescue the rest of their group from the train car, while Gareth leads his surviving men out of Terminus. After Rick's proposal to pursue Gareth's men is rejected, Rick's group reunites with Carol, Judith, and Tyreese, who claims to have killed Martin after the latter threatened Judith's life. The group proceeds to places unknown, with Abraham intending to deliver Eugene to Washington, D.C. to cure the walker virus. Rick covers up a Terminus sign and labels it 'No Sanctuary'. In a post-credits scene, Morgan Jones discovers the sign.",
    datetime: new Date(2014, 10, 15, 22, 00, 00, 00),
  },
  {
  	series: "Batman",
    series_img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Batman_the_Animated_Series_logo.jpg/250px-Batman_the_Animated_Series_logo.jpg",
    genre: "Action",
    season: 0,
    episode: "The Dark Knight's First Night",
    description: "Three men armed with guns are with a box of jewels on the top of a building. They are caught by surprise by a mysterious figure resembling a bat who fights with them. Commissioner Gordon and the rest of the police arrive on the scene and watch as Batman leaps and swings away.",
    datetime: new Date(1992, 08, 06, 16, 00, 00, 00),
  }
  ]
}]);