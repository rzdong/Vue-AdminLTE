<template>
<div class="login-page loginn">
    <div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="card" style="background-color: #fff;">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form action="../../index2.html" method="post">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email">
          <span class="fa fa-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
          <span class="fa fa-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-md-8 col-sm-8">
            <div class="checkbox icheck">
            <label class="">
              <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style="position: relative;">
                  <input type="checkbox" style="position: absolute; top: -20%;display: block; width: 20px; height: 20px; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px;"></div> 
                  <span style="margin-left: 25px;">记住密码</span>
            </label>
          </div>
          </div>
          <!-- /.col -->
          <div class="col-md-4 col-sm-4" style="height: 40px; margin-top: 3px;">
            <button type="submit" class="btn btn-primary btn-block btn-flat">登陆</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</div>
</template>


<style>
.loginn {
    height: 100%;
    width: 100%;
    background: #e9ecef !important;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}
</style>

