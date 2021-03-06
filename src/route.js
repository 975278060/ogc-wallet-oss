import asyncComponent from './component/async-component/async-component';

const ROUTES = [
    {
        path: '/system/role',
        component: asyncComponent(() => import('container/system/role/role'))
    },
    {
        path: '/system/role/addedit',
        component: asyncComponent(() => import('container/system/role-addedit/role-addedit'))
    },
    {
        path: '/system/role/menu',
        component: asyncComponent(() => import('container/system/role-menu/role-menu'))
    },
    // app导航
    {
        path: '/system/appmenu',
        component: asyncComponent(() => import('container/system/role-menu/app-menu'))
    },
    {
        path: '/system/menu',
        component: asyncComponent(() => import('container/system/menu/menu'))
    },
    {
        path: '/system/menu/addedit',
        component: asyncComponent(() => import('container/system/menu-addedit/menu-addedit'))
    },
    {
        path: '/system/user',
        component: asyncComponent(() => import('container/system/user/user'))
    },
    {
        path: '/system/user/role',
        component: asyncComponent(() => import('container/system/user/assign'))
    },

    //  系统参数
    {
        path: '/system/sysPara',
        component: asyncComponent(() => import('container/system/sysParam/sysParam'))
    },
    //  系统参数修改
    {
        path: '/system/sysPara/addedit',
        component: asyncComponent(() => import('container/system/sysParam-addedit/sysParam-addedit'))
    },
    {
        path: '/system/dataDict',
        component: asyncComponent(() => import('container/system/dataDict/dataDict'))
    },
    {
        path: '/system/dataDict/addedit',
        component: asyncComponent(() => import('container/system/dataDict-addedit/dataDict-addedit'))
    },
    {
        path: '/system/user/addedit',
        component: asyncComponent(() => import('container/system/user-addedit/user-addedit'))
    },
    {
        path: '/system/user/resetPwd',
        component: asyncComponent(() => import('container/system/user-resetPwd/user-resetPwd'))
    },
    {
        path: '/public/aboutus',
        component: asyncComponent(() => import('container/public/aboutus/aboutus'))
    },
    {
        path: '/public/aboutus/addedit',
        component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
    },
      {
        path: '/public/quantitative',
        component: asyncComponent(() => import('container/public/quantitative/quantitative'))
      },
  {
    path: '/public/quantitative/addedit',
    component: asyncComponent(() => import('container/public/quantitative/quantitative-addedit'))
  },
    {
        path: '/public/contact',
        component: asyncComponent(() => import('container/public/contact/contact'))
    },
    {
        path: '/public/contact/addedit',
        component: asyncComponent(() => import('container/public/contact-addeidt/contact-addeidt'))
    },
    {
        path: '/public/privacy',
        component: asyncComponent(() => import('container/public/privacy/privacy'))
    },
    {
        path: '/public/privacy/addedit',
        component: asyncComponent(() => import('container/public/privacy-addeidt/privacy-addeidt'))
    },
    {
        path: '/public/register',
        component: asyncComponent(() => import('container/public/register/register'))
    },
    {
        path: '/public/register/addedit',
        component: asyncComponent(() => import('container/public/register-addeidt/register-addeidt'))
    },
    {
        path: '/public/buyADS',
        component: asyncComponent(() => import('container/public/buyADS/buyADS'))
    },
    {
        path: '/public/buyADS/addedit',
        component: asyncComponent(() => import('container/public/buyADS/buyADS-addedit'))
    },
    {
        path: '/public/sellETH',
        component: asyncComponent(() => import('container/public/sellETH/sellETH'))
    },
    {
        path: '/public/sellETH/addedit',
        component: asyncComponent(() => import('container/public/sellETH/sellETH-addedit'))
    },
    {
        path: '/public/TransactionRemind',
        component: asyncComponent(() => import('container/public/TransactionRemind/TransactionRemind'))
    },
    {
        path: '/public/TransactionRemind/addedit',
        component: asyncComponent(() => import('container/public/TransactionRemind/TransactionRemind-addedit'))
    },
    {
        path: '/public/community',
        component: asyncComponent(() => import('container/public/community/community'))
    },
    {
        path: '/public/community/addedit',
        component: asyncComponent(() => import('container/public/community/community-addedit'))
    },
    {
        path: '/public/warmReminding',
        component: asyncComponent(() => import('container/public/warmReminding/warmReminding'))
    },
    {
        path: '/public/warmReminding/addedit',
        component: asyncComponent(() => import('container/public/warmReminding/warmReminding-addedit'))
    },
    {
        path: '/public/legalDeclaration',
        component: asyncComponent(() => import('container/public/legalDeclaration/legalDeclaration'))
    },
    {
        path: '/public/legalDeclaration/addedit',
        component: asyncComponent(() => import('container/public/legalDeclaration/legalDeclaration-addedit'))
    },
    {
        path: '/public/rateExplain',
        component: asyncComponent(() => import('container/public/rateExplain/rateExplain'))
    },
    {
        path: '/public/rateExplain/addedit',
        component: asyncComponent(() => import('container/public/rateExplain/rateExplain-addedit'))
    },

    // 业务管理
    // 客户管理
    // 会员查询
    {
        path: '/user/customer',
        component: asyncComponent(() => import('container/user/customer/customer'))
    },
    {
        path: '/user/customer/addedit',
        component: asyncComponent(() => import('container/user/customer/customer-addedit'))
    },
    {
        path: '/user/customer/editAdvertisementFee',
        component: asyncComponent(() => import('container/user/customer/customer-editAdvertisementFee'))
    },
    {
        path: '/user/customer/accountQuery',
        component: asyncComponent(() => import('container/user/customer/customer-account'))
    },
    {
        path: '/user/customer/entrustQuery',
        component: asyncComponent(() => import('container/user/customer/customer-entrustQuery'))
    },
    {
        path: '/user/customer/ledgerQuery',
        component: asyncComponent(() => import('container/user/customer/customer-ledgerQuery'))
    },
    {
        path: '/user/customer/accountSummary',
        component: asyncComponent(() => import('container/user/customer/customer-accountSummary'))
    },
    // kyc审核
    {
        path: '/user/kycCheck',
        component: asyncComponent(() => import('container/user/kycCheck/kycCheck'))
    },
    {
        path: '/user/kycCheck/addedit',
        component: asyncComponent(() => import('container/user/kycCheck/kycCheck-addedit'))
    },
    // 资料审核
    {
        path: '/user/dataCheck',
        component: asyncComponent(() => import('container/user/dataCheck/dataCheck'))
    },
    {
        path: '/user/dataCheck/addedit',
        component: asyncComponent(() => import('container/user/dataCheck/dataCheck-addedit'))
    },
    // 历史分红名单
    {
        path: '/user/historyDivideList',
        component: asyncComponent(() => import('container/user/historyDivideList/historyDivideList'))
    },
    {
        path: '/user/historyDivideList/divideList',
        component: asyncComponent(() => import('container/user/historyDivideList/historyDivideList-divideList'))
    },
    {
        path: '/user/historyDivideList/divide',
        component: asyncComponent(() => import('container/user/historyDivideList/historyDivideList-divide'))
    },
    // 佣金结算历史
    {
        path: '/user/commissionsHistoryList',
        component: asyncComponent(() => import('container/user/commissionsHistoryList/commissionsHistoryList'))
    },
    {
        path: '/user/commissionsHistoryList/commissions',
        component: asyncComponent(() => import('container/user/commissionsHistoryList/commissionsHistoryList-commissions'))
    },
    // 黑名单管理
    {
        path: '/user/customerBlackList',
        component: asyncComponent(() => import('container/user/customer/customer-blackList'))
    },
    {
        path: '/user/customerBlackList/addedit',
        component: asyncComponent(() => import('container/user/customer/customer-blackListAddedit'))
    },

    // 渠道商管理
    // 渠道商管理
    {
        path: '/user/channelDealer',
        component: asyncComponent(() => import('container/user/channelDealer/channelDealer'))
    },
    {
        path: '/user/channelDealer/addedit',
        component: asyncComponent(() => import('container/user/channelDealer/channelDealer-addedit'))
    },
    {
        path: '/user/channelDealer/accountQuery',
        component: asyncComponent(() => import('container/user/customer/customer-account'))
    },
    {
        path: '/user/channelDealer/lowerLevelQuery',
        component: asyncComponent(() => import('container/user/channelDealer/channelDealer-lowerLevelQuery'))
    },
    {
        path: '/user/channelDealer/divideAccount',
        component: asyncComponent(() => import('container/user/customer/customer-accountSummary'))
    },
    // 待结算佣金名单 (11/28 列表修改为展示佣金明细)
    {
        path: '/user/channelDealerCommissions/channelDealerCommissions',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerCommissions'))
    },
    {
        path: '/user/channelDealerCommissions',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerCommissions-checklist'))
    },
    {
        path: '/user/channelDealerCommissions/settlement',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerCommissions-settlement'))
    },
    // 佣金结算历史  (11/28 列表修改为展示佣金明细)
    {
        path: '/user/channelDealerSettleHistory/channelDealerSettleHistory',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerSettleHistory'))
    },
    {
        path: '/user/channelDealerSettleHistory',
        component: asyncComponent(() => import('container/user/channelDealerCommissions/channelDealerSettleHistory-commissions'))
    },

    // OTC交易管理
    // 购买交易
    {
        path: '/trade/buyTrade',
        component: asyncComponent(() => import('container/trade/buyTrade/buyTrade'))
    },
    {
        path: '/trade/buyTrade/addedit',
        component: asyncComponent(() => import('container/trade/buyTrade/buyTrade-addedit'))
    },
    // 出售交易
    {
        path: '/trade/saleTrade',
        component: asyncComponent(() => import('container/trade/saleTrade/saleTrade'))
    },
    {
        path: '/trade/saleTrade/addedit',
        component: asyncComponent(() => import('container/trade/saleTrade/saleTrade-addedit'))
    },
    // OTC订单管理
    // 进行中订单
    {
        path: '/trade/underWayOrder',
        component: asyncComponent(() => import('container/trade/underWayOrder/underWayOrder'))
    },
    {
        path: '/trade/underWayOrder/addedit',
        component: asyncComponent(() => import('container/trade/underWayOrder/underWayOrder-addedit'))
    },
    // 已结束订单
    {
        path: '/trade/finishOrder',
        component: asyncComponent(() => import('container/trade/finishOrder/finishOrder'))
    },
    {
        path: '/trade/finishOrder/addedit',
        component: asyncComponent(() => import('container/trade/finishOrder/finishOrder-addedit'))
    },

    // 仲裁订单管理
    // 仲裁订单
    {
        path: '/trade/arbitrationOrder',
        component: asyncComponent(() => import('container/trade/arbitrationOrder/arbitrationOrder'))
    },
    {
        path: '/trade/arbitrationOrder/addedit',
        component: asyncComponent(() => import('container/trade/arbitrationOrder/arbitrationOrder-addedit'))
    },
    {
        path: '/trade/arbitrationOrder/resolve',
        component: asyncComponent(() => import('container/trade/arbitrationOrder/arbitrationOrder-resolve'))
    },
    // 仲裁通知人
    {
        path: '/trade/arbitrationNotifier',
        component: asyncComponent(() => import('container/trade/arbitrationNotifier/arbitrationNotifier'))
    },
    {
        path: '/trade/arbitrationNotifier/addedit',
        component: asyncComponent(() => import('container/trade/arbitrationNotifier/arbitrationNotifier-addedit'))
    },

    // 承兑商管理
    // 收款方式
    {
        path: '/accept/payment',
        component: asyncComponent(() => import('container/biz/accept/payment/payment'))
    },
    {
        path: '/accept/payment/addedit',
        component: asyncComponent(() => import('container/biz/accept/payment/payment-addedit'))
    },
    // 购买订单
    {
        path: '/accept/buyOrder',
        component: asyncComponent(() => import('container/biz/accept/buyOrder/buyOrder'))
    },
    {
        path: '/accept/buyOrder/addedit',
        component: asyncComponent(() => import('container/biz/accept/buyOrder/buyOrder-addedit'))
    },
    // 出售订单
    {
        path: '/accept/saleOrder',
        component: asyncComponent(() => import('container/biz/accept/saleOrder/saleOrder'))
    },
    {
        path: '/accept/saleOrder/addedit',
        component: asyncComponent(() => import('container/biz/accept/saleOrder/saleOrder-addedit'))
    },
    // 已完成订单
    {
        path: '/accept/finishOrder',
        component: asyncComponent(() => import('container/biz/accept/finishOrder/finishOrder'))
    },
    {
        path: '/accept/finishOrder/addedit',
        component: asyncComponent(() => import('container/biz/accept/finishOrder/finishOrder-addedit'))
    },
    // 已取消订单
    {
      path: '/accept/cancelOrder',
      component: asyncComponent(() => import('container/biz/accept/cancelOrder/cancelOrder'))
    },
    {
      path: '/accept/cancelOrder/addedit',
      component: asyncComponent(() => import('container/biz/accept/cancelOrder/cancelOrder-addedit'))
    },

    // 行情管理
    // BTC行情
    {
        path: '/quotation/quotationBTC',
        component: asyncComponent(() => import('container/biz/quotation/quotationBTC'))
    },
    // ETH行情
    {
        path: '/quotation/quotationETH',
        component: asyncComponent(() => import('container/biz/quotation/quotationETH'))
    },
    // 承兑商行情
    {
      path: '/quotation/quotationCDS',
      component: asyncComponent(() => import('container/biz/quotation/quotationCDS'))
    },
    // 活动管理
    // 邀请好友
    {
        path: '/activity/invitingFriends',
        component: asyncComponent(() => import('container/biz/activity/invitingFriends/invitingFriends'))
    },
    {
        path: '/activity/invitingFriends/addedit',
        component: asyncComponent(() => import('container/biz/activity/invitingFriends/invitingFriends-addedit'))
    },
    // 邀请好友链接文本
    {
        path: '/activity/invitingTxt',
        component: asyncComponent(() => import('container/biz/activity/invitingHref/invitingTxt-addedit'))
    },
    // 业务规则
    // 广告费规则
    {
        path: '/rules/advertisingFee',
        component: asyncComponent(() => import('container/rules/advertisingFee/advertisingFee'))
    },
    {
        path: '/rules/advertisingFee/addedit',
        component: asyncComponent(() => import('container/rules/advertisingFee/advertisingFee-addedit'))
    },
    // 提币手续费规则
    {
        path: '/rules/withdrawUserFee',
        component: asyncComponent(() => import('container/rules/withdrawUserFee/withdrawUserFee'))
    },
    {
        path: '/rules/withdrawUserFee/addedit',
        component: asyncComponent(() => import('container/rules/withdrawUserFee/withdrawUserFee-addedit'))
    },
    // 承兑商手续费规则
    {
        path: '/rules/acceptRule',
        component: asyncComponent(() => import('container/rules/acceptRule/acceptRule'))
    },
    {
        path: '/rules/acceptRule/addedit',
        component: asyncComponent(() => import('container/rules/acceptRule/acceptRule-addedit'))
    },
    // 业务管理 -- 评论管理 -- 关键字管理
    {
        path: '/comment/keywords',
        component: asyncComponent(() => import('container/biz/comment/keywords/keywords'))
    },
    // 业务管理 -- 评论管理 -- 关键字管理 -- 详情
    {
        path: '/comment/keywords/addedit',
        component: asyncComponent(() => import('container/biz/comment/keywords/keywords-addedit'))
    },
    // 业务管理 -- 评论管理 -- 评论审核
    {
        path: '/comment/check',
        component: asyncComponent(() => import('container/biz/comment/check/check'))
    },
    // 业务管理 -- 评论管理 -- 评论审核 -- 详情
    {
        path: '/comment/check/addedit',
        component: asyncComponent(() => import('container/biz/comment/check/check-addedit'))
    },
    // 业务管理 -- 评论管理 -- 评论查询
    {
        path: '/comment/list',
        component: asyncComponent(() => import('container/biz/comment/list/list'))
    },
    // 业务管理 -- 评论管理 -- 评论查询 -- 详情
    {
        path: '/comment/list/addedit',
        component: asyncComponent(() => import('container/biz/comment/check/check-addedit'))
    },
    // 系统管理 -- 应用平台管理
    {
        path: '/biz/applicationList',
        component: asyncComponent(() => import('container/biz/applicationList/applicationList'))
    },
    // 系统管理 -- 应用平台管理 - 新增修改
    {
        path: '/biz/applicationList/addedit',
        component: asyncComponent(() => import('container/biz/applicationList/applicationList-addedit'))
    },
    // 系统管理 -- 应用平台管理 - 问答
    {
        path: '/biz/applicationList/applicationListHelpSet',
        component: asyncComponent(() => import('container/biz/applicationList/applicationListHelpSet'))
    },
    // 系统管理 -- 应用平台管理 - 问答 - 新增修改
    {
        path: '/biz/applicationList/applicationListHelpSet/addedit',
        component: asyncComponent(() => import('container/biz/applicationList/applicationListHelpSet-addedit'))
    },
    // 系统管理 -- 量化理财管理-产品管理
    {
        path: '/bizFinancial/products',
        component: asyncComponent(() => import('container/biz/financial/products/products'))
    },
    // 系统管理 -- 量化理财管理-产品管理-新增修改
    {
        path: '/bizFinancial/products/addedit',
        component: asyncComponent(() => import('container/biz/financial/products/products-addedit'))
    },
    // 系统管理 -- 量化理财管理-生息中产品-今日收益
    {
        path: '/bizFinancial/products/yesterdayprofit',
        component: asyncComponent(() => import('container/biz/financial/products/todayprofit'))
    },
    // 系统管理 -- 量化理财管理-生息中产品-今日收益详情
    {
        path: '/bizFinancial/yesterdayprofit/detail',
        component: asyncComponent(() => import('container/biz/financial/products/todayprofit-detail'))
    },
    // 系统管理 -- 量化理财管理-生息中产品-今日收益添加
    {
        path: '/bizFinancial/yesterdayprofit/add',
        component: asyncComponent(() => import('container/biz/financial/products/todayprofit-addedit'))
    },
    // 系统管理 -- 量化理财管理-生息中产品-今日收益修改
    {
        path: '/bizFinancial/todaydayprofit/addedit',
        component: asyncComponent(() => import('container/biz/financial/products/todayprofit-edit'))
    },
    // 系统管理 -- 量化理财管理-产品管理-审核详情
    {
        path: '/bizFinancial/products/detail',
        component: asyncComponent(() => import('container/biz/financial/products/products-detail'))
    },
    // 系统管理 -- 量化理财管理-待上架产品
    {
        path: '/bizFinancial/productsApprove',
        component: asyncComponent(() => import('container/biz/financial/order/productsApprove'))
    },
    // 系统管理 -- 量化理财管理-募集中产品
    {
        path: '/bizFinancial/productsRaise',
        component: asyncComponent(() => import('container/biz/financial/order/productsRaise'))
    },
    // 系统管理 -- 量化理财管理-募集中产品-认购明细
    {
        path: '/bizFinancial/productsRaise/investFlowAll',
        component: asyncComponent(() => import('container/biz/financial/order/investFlowAll'))
    },
    // 系统管理 -- 量化理财管理-募集中产品-认购明细
    {
        path: '/bizFinancial/productsRaise/investFlow',
        component: asyncComponent(() => import('container/biz/financial/order/investFlow'))
    },
    // 系统管理 -- 量化理财管理-募集成功产品
    {
        path: '/bizFinancial/productsRaiseSuccess',
        component: asyncComponent(() => import('container/biz/financial/order/productsRaiseSuccess'))
    },
    // 系统管理 -- 量化理财管理-募集成功产品-认购明细
    {
        path: '/bizFinancial/productsRaiseSuccess/investFlowAll',
        component: asyncComponent(() => import('container/biz/financial/order/investFlowAll'))
    },
    // 系统管理 -- 量化理财管理-募集成功产品-还款计划
    {
        path: '/bizFinancial/repaymentPlan',
        component: asyncComponent(() => import('container/biz/financial/order/repaymentPlan'))
    },
    // 系统管理 -- 量化理财管理-募集失败产品
    {
        path: '/bizFinancial/productsRaisefail',
        component: asyncComponent(() => import('container/biz/financial/order/productsRaisefail'))
    },
    // 系统管理 -- 量化理财管理-募集失败产品-认购明细
    {
        path: '/bizFinancial/productsRaisefail/investFlowAll',
        component: asyncComponent(() => import('container/biz/financial/order/investFlowAll'))
    },
    // 系统管理 -- 量化理财管理-生息中产品
    {
      path: '/bizFinancial/productsBearing',
      component: asyncComponent(() => import('container/biz/financial/order/productsBearing'))
    },
    // 系统管理 -- 量化理财管理-即将募集产品
    {
      path: '/bizFinancial/productsWill',
      component: asyncComponent(() => import('container/biz/financial/order/productsWill'))
    },
    // 系统管理 -- 量化理财管理-可还款产品
    {
      path: '/bizFinancial/productsCan',
      component: asyncComponent(() => import('container/biz/financial/order/productsCan'))
    },
    // 系统管理 -- 量化理财管理-可还款产品-- 今日收益
    {
        path: '/bizFinancial/productsCan/todayprofit',
        component: asyncComponent(() => import('container/biz/financial/order/todayprofit'))
    },
    // 系统管理 -- 量化理财管理-已还款产品
    {
        path: '/bizFinancial/productsRepay',
        component: asyncComponent(() => import('container/biz/financial/order/productsRepay'))
    },
    // 系统管理 -- 量化理财管理-已还款产品--今日收益
    {
        path: '/bizFinancial/productsRepay/todayprofit',
        component: asyncComponent(() => import('container/biz/financial/order/todayprofit'))
    },
    // 系统管理 -- 量化理财管理-已还款产品-认购明细
    {
        path: '/bizFinancial/productsRepay/investFlowAll',
        component: asyncComponent(() => import('container/biz/financial/order/investFlowAll'))
    },
    // 系统管理 -- 量化理财管理-募集成功产品-还款计划
    {
        path: '/bizFinancial/productsRepay/repaymentPlan',
        component: asyncComponent(() => import('container/biz/financial/order/repaymentPlan'))
    },
    // 红包管理-红包查询
    {
        path: '/bizRedPacket/redPacketQuery',
        component: asyncComponent(() => import('container/biz/redPacket/redPacketQuery'))
    },
    // 系统管理 -- 红包管理-详情
    {
        path: '/bizRedPacket/redPacketQuery/addedit',
        component: asyncComponent(() => import('container/biz/redPacket/redPacketQuery-addedit'))
    },
    // 红包管理-红包记录领取查询
    {
        path: '/bizReceive/receiveQuery',
        component: asyncComponent(() => import('container/biz/redPacket/receiveQuery'))
    },
    {
        path: '/bizReceive/receiveQuery/addedit',
        component: asyncComponent(() => import('container/biz/redPacket/receiveQuery-addedit'))
    },

    // BTC财务管理
      // 查询币种
      {
        path: '/BTC-finance/addressQuery',
        component: asyncComponent(() => import('container/BTC-finance/addressQuery'))
      },
    // 平台账户
    {
        path: '/BTC-finance/platformAccount',
        component: asyncComponent(() => import('container/BTC-finance/platformAccount/platformAccount'))
    },
    {
        path: '/BTC-finance/platformAccount/ledger',
        component: asyncComponent(() => import('container/user/customer/customer-ledgerQuery'))
    },

    // 分发地址
    {
        path: '/BTC-finance/diviAddress',
        component: asyncComponent(() => import('container/BTC-finance/diviAddress/diviAddress'))
    },
    {
        path: '/BTC-finance/diviAddress/addedit',
        component: asyncComponent(() => import('container/BTC-finance/diviAddress/diviAddress-ledger'))
    },

    // 充币管理
    // 线下充值
    {
        path: '/BTC-finance/offlineRecharge',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRecharge'))
    },
    {
        path: '/BTC-finance/offlineRecharge/addedit',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRecharge-addedit'))
    },
    {
        path: '/BTC-finance/offlineRecharge/detail',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRecharge-detail'))
    },

    // 充值查询
    {
        path: '/BTC-finance/offlineRechargeQuery',
        component: asyncComponent(() => import('container/BTC-finance/offlineRecharge/offlineRechargeQuery'))
    },

    // 提币管理
    // 提币地址
    {
        path: '/BTC-finance/TBAddress',
        component: asyncComponent(() => import('container/BTC-finance/TBAddress/TBAddress'))
    },
      // 补给地址
      {
        path: '/BTC-finance/supplyAddress',
        component: asyncComponent(() => import('container/BTC-finance/supplyAddress/supplyAddress'))
      },

    // 线下提币
    {
        path: '/BTC-finance/TBunderline',
        component: asyncComponent(() => import('container/BTC-finance/TBunderline/TBunderline'))
    },
    {
        path: '/BTC-finance/TBunderline/addedit',
        component: asyncComponent(() => import('container/BTC-finance/TBunderline/TBunderline-addedit'))
    },
    {
        path: '/BTC-finance/TBunderline/multiCheck',
        component: asyncComponent(() => import('container/BTC-finance/TBunderline/TBunderline-multiCheck'))
    },

    // 归集地址
    {
        path: '/BTC-finance/GJAddress',
        component: asyncComponent(() => import('container/BTC-finance/GJAddress/GJAddress'))
    },
    {
        path: '/BTC-finance/GJAddress/addedit',
        component: asyncComponent(() => import('container/BTC-finance/GJAddress/GJAddress-addedit'))
    },
    {
        path: '/BTC-finance/GJAddressQuery',
        component: asyncComponent(() => import('container/BTC-finance/GJAddressQuery/GJAddressQuery'))
    },
    {
        path: '/BTC-finance/GJAddressQuery/addedit',
        component: asyncComponent(() => import('container/BTC-finance/GJAddressQuery/GJAddressQuery-addedit'))
    }
];

export default ROUTES;
