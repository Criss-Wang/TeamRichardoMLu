<Button color='ghost-dark' className='mr-1' onClick={this.togglemodal}><i className="fa fa-pencil"></i></Button>
<div>
                {this.state.img === '' ? null :
                <div>
                  <p>{this.state.uploadedFile.name}</p>
                  <img src={this.state.img} />
                </div>}
              </div>