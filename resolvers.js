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
        },
        deleteTask: async (_, args) => {
            const {id} = args
            await Task.findByIdAndDelete(id)
            return "TASK DELETED"
        },
        updateTask: async (_, {task, id}) => {
            let task_updated = await Task.findByIdAndUpdate(id, {$set: task}, {new: true})
            return task_updated
        }
        
    }
}

module.exports = { resolvers }