import { IProject } from './IProject';
export interface ITask {
  durationInSeconds: number
  description: string
  project: IProject
}