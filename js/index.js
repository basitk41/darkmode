let darkmode = false;
function init() {
  const data = `<div class="container ${darkmode ? "darkmode" : ""}">
                    <div class="row">
                        <div class="col-sm-6"><h4 class="text">Dark Mode</h4></div>
                        <div class="col-sm-6">
                            <label class="switch ">
                                <input type="checkbox" ${
                                  darkmode ? "checked" : ""
                                } class="default" onclick="setDarkmode()">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <h2>Welcome here.</h2>
                        <div class="col-sm-1"></div>
                        <div class="col-sm-5">
                        <label>Username</label>
                        <input type="text" class="form-control"/>
                        <label>Password</label>
                        <input type="password" class="form-control"/>
                        <br />
                        <button type="submit" class="btn btn-success">Sign in</button>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                </div>`;
  const div = document.getElementById("root");
  div.innerHTML = data;
}
function setDarkmode() {
  const body = document.getElementById("id");
  body.style.backgroundColor = darkmode ? "white" : "black";
  darkmode = !darkmode;
  init();
}
init();
