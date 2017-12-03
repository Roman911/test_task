<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Men Clothes</title>
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
<?php wp_head(); ?>
<body>
<div class="page-wrapper">
  <?php get_header(); ?>
  <main class="page-main">
    <div class="page-content">
      <div class="images">
        <div class="images__little">
          <img src="<?php bloginfo('template_url'); ?>/assets/images/img_little_1.jpg" alt="">
          <img src="<?php bloginfo('template_url'); ?>/assets/images/img_little_2.jpg" alt="">
        </div>
        <div class="images__big">
          <img src="<?php bloginfo('template_url'); ?>/assets/images/img_big.jpg" alt="">
        </div>
      </div>
      <div class="info">
        <div class="info__title">
          <span><a href="#" class="fa fa-mars"> Men Clothes</a></span>
          <span>&gt;</span>
          <span><a href="#">Coat & Jacket</a></span>
          <h2>LIGHTWEIGHT NYLON KNITWEAT<br>IN BLACK</h2>
        </div>
        <div class="info__price">
          <h2>$48.00</h2>
        </div>
        <div class="info__description">
          <h3>Description</h3>
          <p>
            Cras efficitur iaculis sapien, vel tincidunt magna egestas at. Nunc finibus, metus id fermentum. Cras efficitur iaculis sapien, vel tincidunt magna egestas at, vel tincidunt magna egestas at cras effcitur.<br>
            Cras efficitur iaculis sapien, vel tincidunt magna egestas at. Nunc finibus, metus id fermentum.
          </p>
        </div>
        <div class="info__properties">
          <h3>Colors</h3>
          <div class="info__properties_blue">
            <div class="circle"></div>
            <div class="color"></div>
            <div class="text">
              <h3>Blue</h3>
            </div>
          </div>
          <div class="info__properties_brown">
            <div class="fa fa-check"></div>
            <div class="color"></div>
            <div class="text">
              <h3>Brown</h3>
            </div>
          </div>
        </div>
        <button class="info__btn">Buy now - $78</button>
      </div>
    </div>
  </main>
  <?php get_footer(); ?>
</div>
<!--<script type="text/javascript" src="vendors.js"></script><script type="text/javascript" src="application.js"></script>-->
<?php wp_footer(); ?>
</body>
</html>