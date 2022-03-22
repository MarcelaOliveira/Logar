import React from "react";

export default function ModalDeletar({ onDeletar }) {
  return (
    <div id="DeletarUser" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Deletar conta</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>Você tem certeza que deseja deletar sua conta?</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={onDeletar}>
              Deletar
            </button>
            <button type="button" className="btn close bt" data-dismiss="modal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
