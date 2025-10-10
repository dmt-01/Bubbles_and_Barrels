import { Controller } from "../Libs/Controller";
import { UsersRepository } from "../Repositories/UsersRepository";

export class UsersController extends Controller {
  public async getUsersId() {
    const id = this.request.params.id;
    const productRepository = new UsersRepository();
    const product = await productRepository.findAllUsers();

    if (!product) {
      this.response.status(404).json({
        success: false,
        message: "Le user n'existe pas",
      });
      return;
    }

    this.response.json({
      success: true,
      data: product,
    });
  }
}
