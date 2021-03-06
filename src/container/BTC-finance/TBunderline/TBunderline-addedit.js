import React from 'react';
import { Form } from 'antd';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/BTC-finance/TBunderline/TBunderline-addedit';
import {getQueryString, moneyFormat, getUserId, showSucMsg} from 'common/js/util';
import fetch from 'common/js/fetch';
import DetailUtil from 'common/js/build-detail';
@Form.create()
class TBunderlineAddedit extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.isCheck = !!getQueryString('isCheck', this.props.location.search);
    }

    render() {
        let fields = [{
            field: 'accountNumber',
            title: '充值账户',
            required: true,
            formatter: (v, data) => {
                return data.withdraw.applyUserInfo ? data.withdraw.applyUserInfo.realName ? data.withdraw.applyUserInfo.realName : data.withdraw.applyUserInfo.mobile ? data.withdraw.applyUserInfo.mobile : data.withdraw.applyUserInfo.email : '';
            }
        }, {
            field: 'amount',
            title: '取现金额',
            required: true,
            coinAmount: true,
            coin: 'BTC',
            formatter: (v, data) => {
                return moneyFormat(data.withdraw.amount, '', data.withdraw.currency);
            }
        }, {
            field: 'fee',
            title: '手续费',
            required: true,
            formatter: (v, data) => {
                return moneyFormat(data.withdraw.fee, '', data.withdraw.currency);
            }
        }, {
            field: 'actualAmount',
            title: '到账金额',
            required: true,
            formatter: (v, data) => {
                return moneyFormat(data.withdraw.actualAmount, '', data.withdraw.currency);
            }
        }, {
            field: 'payCardInfo',
            title: '区块链类型',
            value: 'BTC',
            readonly: true,
            required: true,
            formatter: (v, data) => {
                return data.withdraw.payCardInfo;
            }
        }, {
            field: 'payCardNo',
            title: '提现地址',
            required: true,
          formatter: (v, data) => {
            return data.withdraw.payCardNo;
          }
        }];

        if (!this.isCheck && this.view) {
            fields = fields.concat([{
                field: 'payFee',
                title: '矿工费',
                formatter: (v, data) => {
                    return moneyFormat(data.withdraw.payFee, '', data.withdraw.currency);
                }
            }]);
        }

        fields = fields.concat([{
            field: 'applyNote',
            title: '申请说明',
          formatter: (v, data) => {
            return data.withdraw.applyNote;
          }
        }]);

        let buttons = [{
          title: '返回',
          handler: () => {
            this.props.history.go(-1);
          }
        }];
        if (this.isCheck) {
            fields = fields.concat([{
                field: 'approveNote',
                title: '审核意见',
                readonly: !this.isCheck,
                required: true,
              formatter: (v, data) => {
                return data.withdraw.approveNote;
              }
            }]);
            buttons = [{
                title: '通过',
                handler: (param) => {
                    param.approveResult = '1';
                    param.codeList = [this.code];
                    param.approveUser = getUserId();
                    this.doFetching();
                    fetch(802352, param).then(() => {
                        showSucMsg('操作成功');
                        this.cancelFetching();
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 1000);
                    }).catch(this.cancelFetching);
                },
                check: true,
                type: 'primary'
            }, {
                title: '不通过',
                handler: (param) => {
                    param.approveResult = '0';
                    param.codeList = [this.code];
                    param.approveUser = getUserId();
                    this.doFetching();
                    fetch(802352, param).then(() => {
                        showSucMsg('操作成功');
                        this.cancelFetching();
                        setTimeout(() => {
                            this.props.history.go(-1);
                        }, 1000);
                    }).catch(this.cancelFetching);
                },
                check: true
            }, {
                title: '返回',
                handler: (param) => {
                    this.props.history.go(-1);
                }
            }];
        }
        return this.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            _keys: ['withdraw'],
            detailCode: '802356',
            beforeSubmit: function(data) {
                data.applyUser = getUserId();
                return data;
            },
            buttons: buttons
        });
    }
}

export default TBunderlineAddedit;
