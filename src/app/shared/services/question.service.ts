import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";
import { User } from "../models/user.model";
import { Topic } from "../models/topic.model";
import {Answer} from "../models/answer-model";

@Injectable()
export class QuestionService {
  private answers: Answer[] = [
    new Answer(1, 23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), "Apr 4, 2018"),
    new Answer(1, 23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), "Apr 4, 2018"),
    new Answer(1, 23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), "Apr 4, 2018"),
    new Answer(1, 23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), "Apr 4, 2018")
  ]
  private questions: Question[] = [
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i fdasd", ["R", "Windows"], 0, 32, "45sec", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools."), this.answers),
    new Question(2, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows", "Apple"], 32, 32, "45sec", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools."), this.answers),
    new Question(3, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 43,32, "45sec", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools."), this.answers),
    new Question(4, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 0,  32, "45sec", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools."), this.answers),
    new Question(5, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 1,  32, "45sec", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools."), this.answers),
    new Question(6, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 7,  32, "45sec", new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools."), this.answers),
  ]

  public getQuestions(): Question[] {
    return this.questions.slice();
  }
  public getAnswers(): Answer[]{
    return this.answers.slice();
  }
}
