const Task = require('./models/Task')

const resolvers = {
    Query: {
        hello: () => 'Hello World',
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
        getTask: async (_, args) => {
            const task = await Task.findById(args.id)
            return task
        }
    },
    Mutation: {
        createTask: async (_, args) => {
            const {title, description} = args
            const new_task = new Task({title, description})
            await new_task.save()
            return new_task
        }
    }
}

module.exports = { resolvers }