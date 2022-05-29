import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Down } from '../utils/icons';
import Check from '../assets/image/check.svg';
import Warning from '../assets/image/warning.svg';
import Button from './Button';

const Alert = (props) => {
  const state = useSelector((item) => item);
  const {
    type, onHide, title, description,
  } = props;
  console.log(state);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalContainer"
    >
      <Modal.Header
        className={
          type === 'danger'
            ? 'danger'
            : type === 'success'
              ? 'success'
              : type === 'warning'
                ? 'warning'
                : 'info'
        }
      >
        <Image
          src={
            type === 'danger'
              ? Warning
              : type === 'success'
                ? Check
                : type === 'warning'
                  ? Warning
                  : ''
          }
          className="modal-header__image"
        />
        {type === 'info' && <AiOutlineInfoCircle color="#fff" size={93} />}
      </Modal.Header>
      <div className="downicon">
        <Down
          color={
            type === 'danger'
              ? state.theme.dangerColor
              : type === 'success'
                ? state.theme.successColor
                : type === 'warning'
                  ? state.theme.warningColor
                  : state.theme.infoColor
          }
        />
      </div>
      <Modal.Body className="modelbody">
        <p className="modelbody__title">{title}</p>
        <p className="modelbody__description">{description}</p>
      </Modal.Body>
      <Modal.Footer className="modelFooter">
        {type === 'danger' ? (
          <Button onClick={onHide} variant="danger">
            Tamam
          </Button>
        ) : type === 'success' ? (
          <Button onClick={onHide} variant="success">
            Tamam
          </Button>
        ) : type === 'warning' ? (
          <>
            <Button
              onClick={onHide}
              variant="warning"
              style={{ color: 'white' }}
            >
              Onayla
            </Button>
            <Button onClick={onHide} variant="outline-warning">
              İptal Et
            </Button>
          </>
        ) : (
          <Button onClick={onHide} variant="info">
            Gönder
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
Alert.propTypes = {
  type: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Alert;
