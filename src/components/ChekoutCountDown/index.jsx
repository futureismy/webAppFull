import React, { memo } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Countdown, { zeroPad } from "react-countdown";
function CheckoutCountDown(props) {
  const time = props.time;
  // console.log(props.time);
  let refreshPage = () => {
    window.location.reload(false);
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return (
        <>
          <Modal open={true} closeOnOverlayClick={false} showCloseIcon={false}>
            <span>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 5 phút.
              <span
                onClick={() => {
                  refreshPage();
                }}
                style={{ color: "red", cursor: "pointer" }}
              >
                {" "}
                Đặt vé lại
              </span>
            </span>
          </Modal>
        </>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  return (
    <div>
      <Countdown date={Date.now() + time} renderer={renderer} />
    </div>
  );
}

export default memo(CheckoutCountDown);
