package com.demo.response;

/**
 * Created by heyuanxiang on 17/7/4.
 */
public class BaseResponse {
    private int errCode;
    private boolean success;
    private String msg;

    public BaseResponse() {
        this.errCode = 0;
        this.success = true;
        this.msg = "成功";
    }

    public BaseResponse(int errCode, boolean success, String msg) {
        this.errCode = errCode;
        this.success = success;
        this.msg = msg;
    }

    public int getErrCode() {
        return errCode;
    }

    public void setErrCode(int errCode) {
        this.errCode = errCode;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
