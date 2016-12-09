///**Created by Administrator on 2016/12/3.*/
var JSONObject= {
    "lottId": 2179,
    "lottStatus": 2,
    "userNum": 0,
    "deadlineTime": "Sun Feb 26 17:03:45 CST 2017",
    "offset": 0,
    "itemTitle": "中国联通10元充值卡",
    "icatId": 10,
    "prePage": 1,
    "created": "Mon Nov 28 17:03:45 CST 2016",
    "pageSize": 20,
    "winnerShares": 0,
    "totalShares": 12,
    "lottPeriod": 23,
    "itemImage": "http://s.tiaohot.com/pic/itemImages/1.png",
    "itemId": 1,
    "subImages": "",
    "lottType": 1,
    "firstPage": true,
    "pageNo": 1,
    "subtitle": "（可用于直接充值话费）【此商品不可晒单】",
    "startTime": "Mon Nov 28 17:03:45 CST 2016",
    "lottShares": 0};
var LikeButton = React.createClass({

    render: function() {
        return (
            <div className="xm-qh">
            <div className="xm-goods">
            <a href="info.html">
            <div className="xm-goods-img"><img src={JSONObject.itemImage}/></div>
        <p className="p0">{JSONObject.itemTitle}</p>
        </a>
        <div className="announced-progress">
            <p className="p1">揭晓进度<em>20%</em></p>
            <div className="w_line x_new_line">
            <span></span>
            </div>
            <div className="heart-wrap">
            <img  className="heart1"/>
            </div>
            </div>
            </div>
            </div>
        );
    }
});
ReactDOM.render(
<LikeButton />,
    document.getElementById('example')
);
