import React from 'react';
import {Modal} from 'antd';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/biz/financial/productsRaiseSuccess';
import {listWrapper} from 'common/js/build-list';
import {
    moneyFormat,
    showWarnMsg,
    showSucMsg
} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bizProductsRaiseSuccess,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class ProductsRaiseSuccess extends React.Component {
    render() {
        const fields = [{
            title: '名称（中文简体）',
            field: 'name',
            render: (v, data) => {
                return data.nameZhCn ? data.nameZhCn : '';
            },
            search: true
        }, {
          title: '名称（中文简体）',
          field: 'nameZhCn',
          search: true
        }, {
          title: '币种',
          field: 'symbol',
          type: 'select',
          pageCode: '802005',
          params: {
            status: '0'
          },
          keyName: 'symbol',
          valueName: '{{symbol.DATA}}-{{cname.DATA}}',
          searchName: 'symbol',
          search: true,
          render: (v, data) => v
        }, {
            title: '类型',
            field: 'type',
            type: 'select',
            key: 'product_type',
            search: true
        }, {
            title: '产品期限（天）',
            field: 'limitDays'
        }, {
            title: '预期年化收益率(%)',
            field: 'expectYield',
            render: function (v, data) {
                return v * 100;
            }
        }, {
            title: '总募集金额',
            field: 'amount',
            render: function (v, data) {
                return moneyFormat(v.toString(), '', data.symbol);
            }
        }, {
            title: '可售金额',
            field: 'avilAmount',
            render: function (v, data) {
                return moneyFormat(v.toString(), '', data.symbol);
            }
        }, {
            title: '募集成功金额',
            field: 'successAmount',
            render: function (v, data) {
                return moneyFormat(v.toString(), '', data.symbol);
            }
        }, {
            title: '总份数',
            field: 'totalFen'
        }, {
            title: '限购份数',
            field: 'limitFen'
        }, {
            title: '状态',
            field: 'status',
            type: 'select',
            key: 'product_status',
            required: true
        }, {
            title: '更新时间',
            field: 'updateDatetime',
            type: 'datetime'
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildList({
            fields,
            pageCode: '625510',
            searchParams: {
                statusList: ['6']
            },
            btnEvent: {
              detail: (selectedRowKeys, selectedRows) => {
                if (!selectedRowKeys.length) {
                  showWarnMsg('请选择记录');
                } else if (selectedRowKeys.length > 1) {
                  showWarnMsg('请选择一条记录');
                } else {
                  this.props.history.push(`/bizFinancial/products/detail?v=1&code=${selectedRowKeys[0]}&isDetail=1`);
                }
              },
              investFlowAll: (selectedRowKeys, selectedRows) => {
                if (!selectedRowKeys.length) {
                  showWarnMsg('请选择记录');
                } else if (selectedRowKeys.length > 1) {
                  showWarnMsg('请选择一条记录');
                } else {
                  var statusList = {'5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10'};
                  if (!statusList[selectedRows[0].status]) {
                    showWarnMsg('该产品还未开始募集！');
                    return;
                  }
                  this.props.history.push(`/bizFinancial/productsRaise/investFlowAll?code=${selectedRows[0].code}&menu=raiseSuccess`);
                }
              },
              repaymentPlan: (selectedRowKeys, selectedRows) => {
                if (!selectedRowKeys.length) {
                  showWarnMsg('请选择记录');
                } else if (selectedRowKeys.length > 1) {
                  showWarnMsg('请选择一条记录');
                } else {
                  if (selectedRows[0].status !== '6' && selectedRows[0].status !== '7' && selectedRows[0].status !== '8' && selectedRows[0].status !== '9') {
                    showWarnMsg('该产品还没有还款计划！');
                    return;
                  }
                  this.props.history.push(`/bizFinancial/repaymentPlan?productCode=${selectedRows[0].code}&symbol=${selectedRows[0].symbol}`);
                }
              }
            }
        });
    }
}

export default ProductsRaiseSuccess;
