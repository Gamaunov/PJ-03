import photo_1 from "./img/person/p-1.jpg";
import photo_2 from "./img/person/p-2.jpg";
import photo_3 from "./img/person/p-3.jpg";
import photo_4 from "./img/person/p-4.jpg";
import photo_5 from "./img/person/p-5.jpg";
import photo_6 from "./img/person/p-6.jpg";
import photoDef from "./img/person/user-default.svg";

export const getComments = async () => {
  return [
    {
      id: "1",
      body:
        "Самое обидное когда сценарий по сути есть - в виде книг, где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и экранизировать оригинал как это было в первых фильмах с минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал, однако вместо этого 'Кольца власти' просто позаимствовали имена из оригинала, куски истории, мало связанные между собой и выдали очередной среднячковый сериал на один раз в лучшем случае.",
      username: "Petra_1994b",
      photo: photo_1,
      defaultPhoto: photoDef,
      userId: "1",
      parentId: null,
      likes: 0,
      favourites: false,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body:
        "Наверное, самая большая ошибка создателей сериала была в том, что они поставили уж слишком много надежд на поддержку фанатов вселенной. Как оказалось на деле, большинство 'фанатов' с самой настоящей яростью и желчью стали уничтожать сериал, при этом объективности в отзывах самый минимум.",
      username: "Джунбокс3000",
      photo: photo_2,
      defaultPhoto: photoDef,
      userId: "2",
      parentId: null,
      likes: 0,
      favourites: false,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body:
        "Называть проект Молочникова, в котором играют прекрасные Янковский и Эйдельштейн, 'сериалом с блогерами' - это реально несправедливо. К тому же, у Молочникова уже играла в спектакле Екатерина Варнава, которая тоже не актриса, и получилось отлично. Так что, вполне возможно, и Ивлеева с хорошим режиссером себя еще покажет Варнава, которая тоже не актриса, и получилось отлично. Так что, вполне возможно, и Ивлеева с хорошим режиссером себя еще покажет.",
      username: "Джунбокс3001",
      photo: photo_3,
      defaultPhoto: photoDef,
      userId: "2",
      parentId: "1",
      likes: 0,
      favourites: false,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "lorem ipsum dolor etc.",
      username: "Джунбокс3002",
      photo: photo_4,
      defaultPhoto: photoDef,
      userId: "2",
      parentId: "2",
      likes: 0,
      favourites: false,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    body: text,
    photo: photo_5,
    defaultPhoto: photoDef,
    parentId,
    likes: 0,
    favourites: false,
    username: "MyUsename",
    userId: "1",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
