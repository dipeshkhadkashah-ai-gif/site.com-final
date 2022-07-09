import React from "react";
import "./styles.module.css";

const Profile = () => {
  return (
    //     <div>
    //       {/* User Profile */}
    // <div class="user-profile py-4">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-lg-4">
    //         <div class="card shadow-sm">
    //           <div class="card-header bg-transparent text-center">
    //             {/* <img class="profile_img" src="https://placeimg.com/640/480/arch/any" alt="" /> */}
    //             <h3>Ishmam Ahasan Samin</h3>
    //           </div>
    //           <div class="card-body">
    //             <p class="mb-0"><strong class="pr-1">user ID:</strong>321000001</p>
    //             <p class="mb-0"><strong class="pr-1">Class:</strong>4</p>
    //             <p class="mb-0"><strong class="pr-1">Section:</strong>A</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-lg-8">
    //         <div class="card shadow-sm">
    //           <div class="card-header bg-transparent border-0">
    //             <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
    //           </div>
    //           <div class="card-body pt-0">
    //             <table class="table table-bordered">
    //               <tr>
    //                 <th width="30%">Roll</th>
    //                 <td width="2%">:</td>
    //                 <td>125</td>
    //               </tr>
    //               <tr>
    //                 <th width="30%">Academic Year	</th>
    //                 <td width="2%">:</td>
    //                 <td>2020</td>
    //               </tr>
    //               <tr>
    //                 <th width="30%">Gender</th>
    //                 <td width="2%">:</td>
    //                 <td>Male</td>
    //               </tr>
    //               <tr>
    //                 <th width="30%">Religion</th>
    //                 <td width="2%">:</td>
    //                 <td>Group</td>
    //               </tr>
    //               <tr>
    //                 <th width="30%">blood</th>
    //                 <td width="2%">:</td>
    //                 <td>B+</td>
    //               </tr>
    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //     </div>
    <>
      {/* <p>Profile is Under-Construction</p> */}
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 class="my-3">Dipesh Khadka Shah</h5>
                  <p class="text-muted mb-1">Full Stack Developer</p>
                  <p class="text-muted mb-4">Kalanaki 14, Kathmandu</p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">
                      Follow
                    </button>
                    <button type="button" class="btn btn-outline-primary ms-1">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Dipesh Khadka Shah</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">dipeshkhadkashah@gmail.com</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">+977-014284712</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(+977)-9871832539</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Kalanki, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4">
                        <span class="text-primary font-italic me-1">
                          Assigment
                        </span>{" "}
                        Frontend
                      </p>
                      <p class="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fonSize: ".77rem" }}>
                        Figma 
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Html & css
                      </p>
                      <div
                        class="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4">
                        <span class="text-primary font-italic me-1">
                          
                          Assigment
                        </span>{" "}
                        Backend
                      </p>
                      <p class="mb-1" style={{ fontSize: ".77rem;" }}>
                        Node 
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        API
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Cross Connection
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Postman
                      </p>
                      <div class="progress rounded" style={{ height: "5px" }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        class="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
