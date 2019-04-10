import { TestBed } from '@angular/core/testing';

import { MovieBotService } from './movie-bot.service';

describe('MovieBotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieBotService = TestBed.get(MovieBotService);
    expect(service).toBeTruthy();
  });
});
