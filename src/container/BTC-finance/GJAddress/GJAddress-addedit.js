import React from 'react';
import { Form } from 'antd';
import {
  initStates,
  doFetching,
  cancelFetching,
  setSelectData,
  setPageData,
  restore
} from '@redux/BTC-finance/GJAddress/GJAddress-addedit';
import {getQueryString, moneyFormat, getUserName, showSucMsg} from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class GJAddressAddedit extends DetailUtil {
  render() {
    let fields = [{
      field: 'symbol',
      title: '币种类型',
      type: 'select',
      pageCode: '802005',
      params: {
        status: '0'
      },
      keyName: 'symbol',
      valueName: '{{symbol.DATA}}-{{cname.DATA}}',
      searchName: 'symbol'
    }, {
      field: 'address',
      title: '地址'
    }];

    return this.buildDetail({
      fields,
      addCode: '802520'
    });
  }
}

export default GJAddressAddedit;
