import React from "react";
import { useHistory } from "react-router";

function FirstHeroCard() {
  const history = useHistory();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 mb-16">
      <div className="col-span-1">
        <img
          onClick={() => {
            history.push({
              pathname: `/blog/${"Lorem Ipsum is simply dummy text of the printing"}`,
              state: {
                date: "25 April, 2021",
                title: "Lorem Ipsum is simply dummy text of the printing",
                thumbnail:
                  "https://images.unsplash.com/photo-1606246481699-f16245882373?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                blogLink:
                  "/blog/Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing",
                projectDescription:
                  "Lorem Ipsum is simply dummy Lorem ipsum dolor sit ametLorem Ipsum is simply dummy Lorem ipsum dolor sit ametLorem Ipsum is simply dummy Lorem ipsum dolor sit ametLorem Ipsum is simply dummy Lorem ipsum dolor sit ametLorem Ipsum is simply dummy Lorem ipsum dolor sit ametLorem Ipsum is simply dummy Lorem ipsum dolor sit ametLorem Ipsum is simply dummy Lorem ipsum dolor sit amet",
              },
            });
          }}
          className="cursor-pointer w-full h-72 lg:h-96 object-cover object-center"
          src="https://images.unsplash.com/photo-1606246481699-f16245882373?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="imagesCard"
        />
      </div>
      <div className="col-span-1 p-4 lg:p-8">
        <div className="font-light">April 5, 2021</div>
        <div className="cursor-pointer text-2xl my-6 font-bold">
          Lorem Ipsum is simply dummy text of the printing
        </div>
        <p className="leading-8 cursor-pointer">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. Ipsum has been the industry's standard
          dummy text ever...
        </p>
      </div>
    </div>
  );
}

export default FirstHeroCard;
