import { Modal, Button } from 'react-bootstrap'

export default function DeleteData({ show, handleClose, setConfirmDelete }) {

    const handleDelete = () => {
        setConfirmDelete(true)
    }

    return (
        <Modal show={show} onHide={handleClose} centered className='modal shadow'>
            <Modal.Body className="text-dark">
                <div style={{fontSize: '16px', fontWeight: '500'}} className="mt-2">
                    Anda yakin menghapus data ?
                </div>
                <div className="text-end mt-5 float-right">
                    <Button 
                        onClick={handleDelete} 
                        size="sm" 
                        className="btn-primary" 
                        style={{width: '55px'}}>
                            OK
                    </Button>
                    <Button 
                        onClick={handleClose} 
                        size="sm" 
                        className="btn-secondary ml-2" 
                        style={{width: '55px'}}>
                            Batal
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}