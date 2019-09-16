module Api
  module V1
    class EventsController < ApplicationController

      before_action :authenticate_user!
      
      def index
        events = Event.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Artigos carregados', data:events}, status: :ok
      end

      def show
        event = Event.find(params[:id])
        render json: {status: 'SUCCESS', message:'Loaded event', data:event}, status: :ok
      end

      def create
        event = Event.new(event_params)
        if event.save
          render json: {status: 'SUCCESS', message:'Saved event', data:event}, status: :ok
        else
          render json: {status: 'ERROR', message:'Event not saved', data:event.erros}, status: :unprocessable_entity
        end
      end

      def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: {status: 'SUCCESS', message:'Deleted event', data:event}, status: :ok
      end

      def update
        event = Event.find(params[:id])
        if event.update_attributes(event_params)
          render json: {status: 'SUCCESS', message:'Updated article', data:event},status: :ok
        else
          render json: {status: 'ERROR', message:'Events not update', data:event.erros}, status: :unprocessable_entity
        end
      end

      private

      def event_params
        params.permit(:name, :description, :event_start, :event_end, :picture, :user_id)
      end
    end
  end
end
