import React, { useContext, useEffect, useState } from "react";
import {NavLink, Link} from "react-router-dom";





const BlogDetails = () => {

    
  return (
    <div id="BlogDetails">
        <div className="container">
        <h2 class="text-center my-4 position-relative col-12">Blog</h2>
            <div className="coverPhoto mt-5">
                <img src="./images/blog-pics/car.jpg"
                    alt=""
                    className="w-75"
                    >
                    
                </img>
            </div>
            <div className="flareTag my-3 mx-0 row align-items-center">
            <span class="text-white rounded px-2 ">Petrol</span>
            <span className="ml-2 font-weight-bold"> - June 10, 2022</span> {/* Date when blog is posted */}
             
            </div>

            <h2 className="my-4">Title - Are cars getting heavier?</h2>

            <p> 
            Full topic here - Hello we Will talk  about cars getting heavier. Actually they are not getting heavier bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque nostrum tempore consequatur. Cumque natus aut maiores nisi ex, dolorum aliquid. Ratione, beatae quidem voluptatum asperiores suscipit reiciendis aliquid explicabo, laborum corrupti perspiciatis alias assumenda doloribus libero magnam natus! Amet, magni totam natus consequatur error repellat, quae deleniti hic inventore, voluptate delectus voluptatibus iure ut itaque. Dicta, obcaecati pariatur illo laborum dolorum minus voluptatem, maiores sequi sit blanditiis rem tempore illum nostrum repellat officiis commodi amet debitis voluptate facere fugiat. Laborum voluptatibus at illo facilis modi exercitationem, veniam nemo dolores id. Non eaque corporis eligendi nisi quisquam ab ipsum a reiciendis possimus eos veniam magni ea fugit cupiditate aspernatur doloremque dicta sint, nihil magnam laboriosam debitis ullam. Tenetur numquam eveniet quis ex accusantium modi, nisi optio corporis ut omnis. Error perspiciatis ad nobis nam, nesciunt unde ratione explicabo ut possimus minus? Atque non corrupti dolor iste itaque voluptates dolorum ad autem earum veritatis tempore, corporis dolorem velit cumque expedita vitae quis odit. Quasi ab exercitationem provident quos autem sit fugit nobis et distinctio. Tempora odit totam esse excepturi, aut sed alias illo et inventore atque ullam nihil consequuntur placeat officia modi, nobis ipsa. Quisquam, animi autem maxime nobis non asperiores?
            </p>

            <hr />
             <div className="poster row mx-0 ">
                  <img src="./images/profilepic.jpeg" alt="" width={90} height={90}/> 
                  <h5 className="ml-3 mt-2">Rahul Gianchandani</h5> 
                  
                  {/* we get name and profile pic of user who posts blog */}
             </div>
            <hr />
        </div>

    </div>

    );
};

export default BlogDetails;