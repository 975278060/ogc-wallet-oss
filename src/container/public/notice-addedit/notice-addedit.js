import React from 'react';
import { Form } from 'antd';
import DetailUtil from 'common/js/build-detail';
import {getQueryString, getUserName, showSucMsg} from 'common/js/util';
import {SYSTEM_CODE} from 'common/js/config';
import fetch from 'common/js/fetch';

@Form.create()
class NoticeAddEdit extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        // 发布
        this.isPushDown = !!getQueryString('isPushDown', this.props.location.search);
        this.buttons = [];
        if (this.isPushDown) {
            this.buttons = [{
                title: '发布',
                handler: (param) => {
                    param.updater = getUserName();
                    this.doFetching();
                    fetch(805301, param).then(() => {
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
                title: '返回',
                handler: () => {
                    this.props.history.go(-1);
                }
            }];
        } else if (!this.code) {
            this.buttons = [{
                title: '发布',
                handler: (param) => {
                    param.updater = getUserName();
                    this.doFetching();
                    fetch(805301, param).then(() => {
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
                title: '保存',
                handler: (param) => {
                    param.updater = getUserName();
                    this.doFetching();
                    fetch(805300, param).then(() => {
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
                handler: () => {
                    this.props.history.go(-1);
                }
            }];
        } else {
            this.buttons = [{
                title: '返回',
                handler: () => {
                  this.props.history.go(-1);
                }
            }];
        }
    }

    render() {
        const fields = [{
            title: '语言',
            field: 'lang',
            type: 'select',
            data: [{
                key: 'cn',
                value: '中文版'
            }, {
                key: 'en',
                value: '英文版'
            }],
            keyName: 'key',
            valueName: 'value',
            required: true
        }, {
            title: '标题',
            field: 'title',
            required: true,
            maxlength: 30
        }, {
            title: '内容',
            field: 'content',
            type: 'textarea',
            normalArea: true,
            required: true
        }, {
            title: '类型',
            field: 'type',
            hidden: true,
            value: 0
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            detailCode: 805307,
            buttons: this.buttons,
            beforeSumit: (params) => {
                params.updater = getUserName();
                return params;
            }
        });
    }
}

export default NoticeAddEdit;
