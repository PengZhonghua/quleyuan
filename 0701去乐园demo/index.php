<?php
session_start();
require "./JSSDK.php";
$jssdk = new JSSDK("wxc1b7e103bc16df21", "54c77a56c2afebace6663f0dd4d18e27");
$signPackage = $jssdk->getSignPackage();
// print_r($_SESSION);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title></title>
</head>
<body>
  <ul>
    <li>
      <button onclick="func1();">获取地理位置</button>
    </li>
  </ul>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  
  wx.config({
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'getLocation'
    ]
  });
  wx.error(function(res){
      alert(JSON.stringify(res));
    })

    function func1(){
      
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                alert(latitude+"|"+longitude);
            },
            fail:function(){
              //alert('fail');
            }
        });
      
    
    }
</script>
</html>