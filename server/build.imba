import { Kernel } from '@formidablejs/framework'
import { app } from '../bootstrap/main'

const application = app.initiate(app.make(Kernel), true)

export { application }
