import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService

    beforeEach(() => {
        service = new MessageService;
    })

    it('should have no messages to start', () => {
        expect(service.messages.length).toBe(0)
    })

    it('should add a message when add is called', () => {
        service.add('message1');

        expect(service.messages.length).toBe(1);
    })

    it('should remove all messages when clear is called', () => {
        //arrange
        service.add('message1');
        
        //act
        service.clear()
    
        //assert    
        expect(service.messages.length).toBe(0);
    })

    it('should return to most recent message', () => {
        //arrange (add messaages so that there are some to return)
        service.add('message1');
        service.add('message2');

        //act (attempt to return a message)
        var recentMessage = service.getMostRecent();

        //assert (verify the most recent message was returned)
        expect(recentMessage).toBe('message2');

    })
})