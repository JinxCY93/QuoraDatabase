import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
export class Question_votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @ManyToOne(type => Question, questions => questions.questionvotes)
  @JoinColumn({ name: "question_id" })
  questions: Question

  @ManyToOne(type => User, users => users.questionvotes)
  @JoinColumn({ name: "user_id" })
  users: User
}
